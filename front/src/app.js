import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
// import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient)
export class App {
    constructor(http) {
        http.configure(config => {
            config.withBaseUrl('http://localhost:3000/');
        });
        this.http = http;
    }

    submit(images) {
        let formData = new FormData();

        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        this.http.fetch('attachments', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.log(error));
    }

    // submitWithHttp(images) {
    //     let formData = new FormData();
    //
    //     for (let i = 0; i < images.length; i++) {
    //         formData.append('images', images[i]);
    //     }
    //
    //     this.http.post('attachments', formData)
    //         .then(data => console.log(data))
    //         .catch(error => console.log(error));
    // }
}
