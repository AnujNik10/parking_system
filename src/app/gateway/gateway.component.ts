import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


declare var Razorpay: any;

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})

export class GatewayComponent implements OnInit {

  form1!: FormGroup;
  amount: number= 1000
  key: any
  flag: boolean=true

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { 
    this.createForm();
  }

  createForm() {
    this.form1 = this.fb.group({
       name: [''],
       email: [''],
       number: [''],
    });
  }

  ngOnInit(): void {

    this.key = this.route.snapshot.paramMap.get("id")

  }
  message:any = "";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_ywM4wfXGDGHATc",
    "amount": "200000",
    "name": "Aniket Nikhade",
    "description": "Web Development",
    "image": "../assets/slot.jpg",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = "100000"; //paise
    this.options.prefill.name = "";
    this.options.prefill.email = "";
    this.options.prefill.contact = "";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Payment Successfull! Your slot has been booked.";
    this.flag=false
  }
}
