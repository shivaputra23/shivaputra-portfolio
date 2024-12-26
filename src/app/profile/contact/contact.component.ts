import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};
  successMessage: string = ''; // Success message text
  errorMessage: string = ''; // Error message text
  isMessageVisible: boolean = false; // Boolean to control visibility of message
  constructor(){}

  ngOnInit() {
     }

     onSubmit() {
       let formdata = {
         from_name: this.model.name,
         to_name: "shivaputra",
         subject: this.model.subject,
         message: this.model.message,
         reply_to: "shivaputra050699@gmail.com",
       }
      // Send email using EmailJS
      emailjs.send("service_bmx04y3","template_x7nxpdw", formdata, 'tLjERfkV2Jgh7qI_c')
        .then((response) => {
          // console.log('Email sent successfully', response);
          this.showMessage("Thank you for reaching out! Your email has been sent successfully.", 'success');
        })
        .catch((error) => {
          // Email sending failed
          console.error('Failed to send email', error);
          this.showMessage('Oops! Something went wrong while sending your message. Please try again later or contact support.', 'error');
        });
    }
    showMessage(message: string, type: string) {
      this.successMessage = type === 'success' ? message : '';
      this.errorMessage = type === 'error' ? message : '';
      this.isMessageVisible = true;
  
      // Hide the message and remove the background blur after 3 seconds
      setTimeout(() => {
        this.isMessageVisible = false;
      }, 5000); // 3 seconds delay
    }
}
