import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { Product } from 'src/app/demo/domain/product';
import { PhotoService } from 'src/app/demo/service/photoservice';
import { ProductService } from 'src/app/demo/service/productservice';

@Component({
  selector: 'app-fotos-2014',
  templateUrl: './fotos-2014.component.html',
  styleUrls: ['./fotos-2014.component.scss']
})
export class Fotos2014Component implements OnInit {

  products: Product[];

  images: any[];

  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private productService: ProductService, private photoService: PhotoService, private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'álbuns' },
      { label: 'fotos', routerLink: ['/uikit/list'] }
    ]);
  }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });

    this.photoService.getImages().then(images => {
      this.images = images;
    });
  }
}
