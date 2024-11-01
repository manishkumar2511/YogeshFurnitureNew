import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: { id: number; name: string }[] = [
    { id: 1, name: 'Sofas' },
    { id: 2, name: 'Chairs' },
    { id: 3, name: 'Tables' },
    { id: 4, name: 'Beds' },
    { id: 5, name: 'Cabinets' }
  ];

  selectedCategory: number | null = null;

  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = Number(selectElement.value);
    console.log('Selected category ID:', this.selectedCategory);
  }

  // Product data array for displaying in the Our Products section
  products: { image: string; name: string; description: string }[] = [
    { image: '../../../assets/our-products/our-products-logo/sofa.jpg', name: 'Elegant Sofa', description: 'Comfortable and stylish sofa for your living room.' },
    { image: '../../../assets/our-products/our-products-logo/chairlogo1.png', name: 'Classic Chair', description: 'A timeless chair design that suits any decor.' },
    { image: '../../../assets/our-products/our-products-logo/modernTable.jpg', name: 'Modern Table', description: 'A sleek table that adds elegance to your space.' },
    { image: '../../../assets/our-products/our-products-logo/cozybed.webp', name: 'Cozy Bed', description: 'A bed that offers comfort and style for peaceful sleep.' },
  ];
  // Sofa data array for the Elegant Sofa section
  sofas: { image: string; name: string; description: string }[] = [
    { image: '../../../assets/our-products/sofa-section/sofasectionimg1.jpg', name: 'Luxury Sofa', description: 'A luxurious sofa to enhance your living room.' },
    { image: '../../../assets/our-products/sofa-section/sofasectionimg2.jpg', name: 'Classic Sofa', description: 'A classic sofa design for timeless elegance.' },
    { image: '../../../assets/our-products/sofa-section/sofasectionimg3.jpg', name: 'Contemporary Sofa', description: 'A contemporary sofa that brings style to your home.' },
    { image: '../../../assets/our-products/sofa-section/sofasectionimg4.jpg', name: 'Comfort Sofa', description: 'Designed for maximum comfort and style.' },
  ];
}
