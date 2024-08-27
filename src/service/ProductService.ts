// service/ProductService.ts

export class ProductService {
    getProductsSmall(): Promise<any[]> {
        return new Promise((resolve) => {
            const products = [
                { id: '1000', name: 'Bamboo Watch', price: 65, image: 'bamboo-watch.jpg', inventoryStatus: 'INSTOCK' },
                { id: '1001', name: 'Black Watch', price: 72, image: 'black-watch.jpg', inventoryStatus: 'LOWSTOCK' },
                { id: '1002', name: 'Blue Band', price: 79, image: 'blue-band.jpg', inventoryStatus: 'OUTOFSTOCK' },
                { id: '1003', name: 'Blue Band', price: 79, image: 'blue-band.jpg', inventoryStatus: 'OUTOFSTOCK' },
                { id: '1004', name: 'Blue Band', price: 79, image: 'blue-band.jpg', inventoryStatus: 'OUTOFSTOCK' },
                { id: '1005', name: 'Blue Band', price: 79, image: 'blue-band.jpg', inventoryStatus: 'OUTOFSTOCK' },
                // Adicione mais produtos conforme necessário
            ];
            resolve(products);
        });
    }
}