import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../model/order.model';
import { BillModel } from '../model/bill.model';
import { BillService } from '../service/bill.service';
import { OrderService } from '../service/order.service';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent implements OnInit {
  billId!: number;
  bill: BillModel | null = null;
  order: OrderModel | null = null; 



  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private billService: BillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Extract bill ID from the route and fetch details
    this.billId = Number(this.route.snapshot.paramMap.get('billId'));
    this.getBillDetails();
  }



  getBillDetails(): void {
    this.billService.getBillById(this.billId).subscribe(
      (bill) => {
        this.bill = bill;
        if (bill.id) {
          this.getOrderDetails(bill.id);
        } else {
          console.error('No order ID found in the bill.');
          alert('No order found for this bill.');
        }
      },
      (error) => {
        console.error('Error fetching bill details:', error);
        alert('Failed to load bill details.');
      }
    );
  }

  getOrderDetails(billId: number): void {
    this.orderService.getOrderByBillId(billId).subscribe(
      (order) => {
        this.order = order;
        console.log('Order Details:', this.order);
      },
      (error) => {
        console.error('Error fetching order details:', error);
        alert('Failed to load order details.');
      }
    );
  }
}
