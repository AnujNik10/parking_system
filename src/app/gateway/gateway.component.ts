import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import axios from 'axios';

declare var Razorpay: any;

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css'],
})
export class GatewayComponent implements OnInit {
  form1!: FormGroup;
  amount: number = 1000;
  key: any;
  flag: boolean = true;

  selectedFile: File = new File(['12'], 'Sample');

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files && element.files.length) {
      this.selectedFile = element.files[0];
      console.log(this.selectedFile);
    }
  }
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.form1 = this.fb.group({
      vehicle_number: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('id');
  }

  message: any = '';
  paymentId = '';
  error = '';
  title = 'angular-razorpay-intergration';
  options = {
    key: 'rzp_test_ywM4wfXGDGHATc',
    amount: '200000',
    name: 'Parking System Ltd.',
    description: 'Web Development',
    image: '../assets/slot.jpg',
    order_id: '',
    handler: function (response: any) {
      var event = new CustomEvent('payment.success', {
        detail: response,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(event);
    },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    notes: {
      address: '',
    },
    theme: {
      color: '#3399cc',
    },
  };

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = '100000'; //paise
    this.options.prefill.name = '';
    this.options.prefill.email = '';
    this.options.prefill.contact = '';
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
    });
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = 'Payment Successfull! Your slot has been booked.';
    this.flag = false;
    let body = {
      license: this.form1.value.image,
      vehicleNo: this.form1.value.vehicle_number,
    };

    const formData = new FormData();
    formData.append('sample', this.selectedFile);
    formData.append('vehicleNo', this.form1.value.vehicle_number);
    console.log(this.form1.value.image);
    axios
      .post('http://localhost:5000/api/tenant/addvehicle', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUzNWI4NzRlNzE4MmQxNTk2ZGUyNGEiLCJpYXQiOjE2ODMyNzEwNjh9.EohWdmk5bbstTvq_Z5-6Z5Kr3ODdBqMmpRTasiGbvBU',
        },
      })
      .then((response) => {
        console.log(response);
        this.route.queryParams.subscribe((params) => {
          const bookItem = JSON.parse(params['bookItem']);
          let localItem = localStorage.getItem('smartUser');
          if (localItem && bookItem) {
            const user = JSON.parse(localItem);
            axios
              .post('http://localhost:5000/api/book/bookslot', bookItem, {
                headers: { 'auth-token': user.authtoken },
              })
              .then((response) => {
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          else {
            alert("An error occcured please try again later")
          }
          console.log(bookItem);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
