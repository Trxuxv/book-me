import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';

@Component({
    templateUrl: './listdemo.component.html',
    styleUrls: ['./listdemo.scss']
})
export class ListDemoComponent implements OnInit {

    products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];

    constructor(private productService: ProductService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'fotos' },
            { label: 'álbuns', routerLink: ['/uikit/list'] }
        ]);
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.sortOptions = [
            { label: 'Mais recente', value: '!data' },
            { label: 'Mais antigo', value: 'data' }
        ];
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
