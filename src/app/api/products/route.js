import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const productData = await req.json();

        // Basic validation
        const { name, category, price, image, short_description, description } = productData;
        if (!name || !category || !price) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'public', 'product.json');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        // Find the category in the database
        const categoryIndex = data.products_database.findIndex(
            (cat) => cat.category.toLowerCase() === category.toLowerCase()
        );

        if (categoryIndex === -1) {
            // Optional: Create category if it doesn't exist, but for now let's assume it should exist
            return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
        }

        // Generate a simple ID
        const categoryProducts = data.products_database[categoryIndex].products;
        const prefix = category.substring(0, 2).toLowerCase();
        const nextId = `${prefix}-${String(categoryProducts.length + 1).padStart(2, '0')}`;

        const newProduct = {
            id: nextId,
            name,
            description,
            short_description,
            price: Number(price),
            rating: 0, // Initial rating
            image,
            seller_details: {
                name: session.user.name || 'Admin',
                location: 'Dhaka',
                warranty: 'No Warranty'
            },
            reviews: []
        };

        data.products_database[categoryIndex].products.push(newProduct);

        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

        return NextResponse.json({ message: 'Product added successfully', product: newProduct }, { status: 201 });
    } catch (error) {
        console.error('Error adding product:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
