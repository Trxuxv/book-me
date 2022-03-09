import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { AppMainComponent } from '../../app.main.component';

@Component({
    templateUrl: './dashboard.component.html',
    // styleUrls: ['./tabledemo.scss'],
    styles: [`
   img {
	width: 500px;
	mask-image: url(./../../../assets/demo/images/me/mask.png);
	-webkit-mask-image: url(./../../../assets/demo/images/me/mask.png);
	background: no-repeat;
	// filter: blur(0.5px);
	filter: brightness(50%);
	-webkit-filter: brightness(90%);
	-moz-filter: brightness(10%);
	-o-filter: brightness(1%);
	-ms-filter: brightness(10%);
}

:host ::ng-deep {
	.p-paginator {
		.p-paginator-current {
			margin-left: auto;
		}
	}

	.p-progressbar {
		height: 0.5rem;
		background-color: #d8dadc;

		.p-progressbar-value {
			background-color: #607d8b;
		}
	}

	.table-header {
		display: flex;
		justify-content: space-between;
	}

	.p-calendar .p-datepicker {
		min-width: 25rem;

		td {
			font-weight: 400;
		}
	}

	.p-datatable.p-datatable-customers {
		.p-datatable-header {
			padding: 1rem;
			text-align: left;
			font-size: 1.5rem;
		}

		.p-paginator {
			padding: 1rem;
		}

		.p-datatable-thead > tr > th {
			text-align: left;
		}

		.p-dropdown-label:not(.p-placeholder) {
			text-transform: uppercase;
		}
	}

	.p-datatable.p-datatable-customers:not(.p-datatable-gridlines) {
		.p-datatable-tbody > tr > td {
			cursor: auto;
		}
	}

	/* Responsive */
	.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
		display: none;
	}
}

.customer-badge {
	border-radius: 2px;
	padding: 0.25em 0.5rem;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.3px;

	&.status-qualified {
		background: #c8e6c9;
		color: #256029;
	}

	&.status-unqualified {
		background: #ffcdd2;
		color: #c63737;
	}

	&.status-negotiation {
		background: #feedaf;
		color: #8a5340;
	}

	&.status-new {
		background: #b3e5fc;
		color: #23547b;
	}

	&.status-renewal {
		background: #eccfff;
		color: #694382;
	}

	&.status-proposal {
		background: #ffd8b2;
		color: #805b36;
	}
}

.product-badge {
	border-radius: 2px;
	padding: 0.25em 0.5rem;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.3px;

	&.status-instock {
		background: #c8e6c9;
		color: #256029;
	}

	&.status-outofstock {
		background: #ffcdd2;
		color: #c63737;
	}

	&.status-lowstock {
		background: #feedaf;
		color: #8a5340;
	}
}

.order-badge {
	border-radius: 2px;
	padding: 0.25em 0.5rem;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.3px;

	&.order-delivered {
		background: #c8e6c9;
		color: #256029;
	}

	&.order-cancelled {
		background: #ffcdd2;
		color: #c63737;
	}

	&.order-pending {
		background: #feedaf;
		color: #8a5340;
	}

	&.order-returned {
		background: #eccfff;
		color: #694382;
	}
}

@media screen and (max-width: 960px) {
	:host ::ng-deep {
		.p-datatable {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid var(--surface-d);

					> td {
						text-align: left;
						display: block;
						border: 0 none !important;
						width: 100% !important;
						float: left;
						clear: left;
						border: 0 none;

						.p-column-title {
							padding: 0.4rem;
							min-width: 30%;
							display: inline-block;
							margin: -0.4rem 1rem -0.4rem -0.4rem;
							font-weight: bold;
						}

						.p-progressbar {
							margin-top: 0.5rem;
						}
					}
				}
			}
		}
	}
}

  `],
})
export class DashboardDemoComponent implements OnInit {

    ordersChart: any;

    ordersOptions: any;

    activeOrders = 0;

    trafficChart: any;

    trafficOptions: any;

    activeTraffic = 0;

    goalChart: any;

    goalOptions: any;

    items: MenuItem[];

    val1 = 1;

    val3 = 3;

    val4 = 4;

    val5 = 5;

    orderWeek: any;

    selectedOrderWeek: any;

    products: Product[];

    productsThisWeek: Product[];

    productsLastWeek: Product[];

    constructor(private productService: ProductService,
        private breadcrumbService: AppBreadcrumbService, private appMain: AppMainComponent) {
        this.breadcrumbService.setItems([
            { label: 'Inicio', routerLink: ['/'] }
        ]);
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        this.productService.getProducts().then(data => this.productsThisWeek = data);
        this.productService.getProductsMixed().then(data => this.productsLastWeek = data);

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                label: 'Revenue',
                data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
                borderColor: [
                    '#00acac',
                ],
                borderWidth: 2,
                fill: false,
                borderDash: [3, 6],
            }, {
                label: 'Cost',
                data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
                borderColor: [
                    '#f1b263',
                ],
                backgroundColor: [
                    'rgba(241, 178, 99, .07)',
                ],
                borderWidth: 2,
                fill: true,
                pointRadius: 3,
            }]
        };

        this.ordersOptions = {
            legend: {
                display: true,
                labels: {
                    fontColor: '#A0A7B5'
                }
            },
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#A0A7B5'
                    },
                    gridLines: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#A0A7B5'
                    },
                    gridLines: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                }],
            }
        };

        this.trafficChart = this.getTrafficChartData();

        this.trafficOptions = {
            legend: {
                display: false,
            },
            responsive: true,
            cutoutPercentage: 70
        };

        this.appMain['refreshTrafficChart'] = () => {
            this.trafficChart = this.getTrafficChartData();
        };

        this.goalChart = {
            labels: [
                'Complete',
                'Not Complete',
                'Extra Tasks',
            ],
            datasets: [{
                data: [183, 62, 10],
                backgroundColor: [
                    '#ffffff',
                    'rgba(255,255,255,.2)',
                    'rgba(255,255,255,.5)',
                ],
                borderWidth: 0,
            }]
        };

        this.goalOptions = {
            legend: {
                display: false,
            },
            responsive: true,
        };

        this.items = [
            { label: 'Visualizar', icon: 'pi pi-eye', url: 'https://debora.netlify.app/' },
            { label: 'Update Profile', icon: 'pi pi-refresh' },
            { label: 'Delete Profile', icon: 'pi pi-trash' },
        ];

        this.orderWeek = [
            { name: 'This Week', code: '0' },
            { name: 'Last Week', code: '1' }
        ];
    }

    getTrafficChartData() {
        return {
            labels: [
                'Add View',
                'Total View',
            ],
            datasets: [{
                data: [48, 52],
                backgroundColor: [
                    getComputedStyle(document.body).getPropertyValue('--primary-dark-color') || '#2c84d8',
                    getComputedStyle(document.body).getPropertyValue('--content-alt-bg-color') || '#B1B9C9',
                ],
                borderWidth: 0,
            }]
        };
    }

    changeDataset(event) {
        const dataSet = [
            [31, 83, 69, 29, 62, 25, 59, 26, 46],
            [40, 29, 7, 73, 81, 69, 46, 21, 96],
        ];
        const dataSet2 = [
            [67, 98, 27, 88, 38, 3, 22, 60, 56],
            [74, 67, 11, 36, 100, 49, 34, 56, 45],
        ];

        this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));

        this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
        this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
    }

    changeTrafficset(event) {
        const traffidDataSet = [
            [48, 52],
            [26, 74],
            [12, 88],
        ];
        this.activeTraffic = parseInt(event.currentTarget.getAttribute('data-index'));

        this.trafficChart.datasets[0].data = traffidDataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
    }

    recentSales(event) {
        if (event.value.code === '0') {
            this.products = this.productsThisWeek;
        } else {
            this.products = this.productsLastWeek;
        }
    }
}
