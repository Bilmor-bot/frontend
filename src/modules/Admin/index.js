import Authorization from "components/authorization/main";

class AdminBundle {
    constructor() {

    }

    // _register() {
    //     this._authorizationService.register({
    //         email: "",
    //         password: ""
    //     }, (u) => {
    //         console.log(u)
    //     }, (e) => {
    //         console.log(e)
    //     });
    //
    //     return this;
    // }
    //
    // _login() {
    //     this._authorizationService.login({
    //         email: "warhauslive@gmail.com",
    //         password: "753119Ar"
    //     }, (u) => {
    //         console.log(u)
    //     }, (e) => {
    //         console.log(e)
    //     });
    //
    //     return this;
    // }
    //
    // _logout() {
    //     this._authorizationService.logout();
    //
    //     return this;
    // }
    //
    // _getUser() {
    //     this._authorizationService.getUser((user) => {
    //         console.log(user)
    //     }, (error) => {
    //         console.log(error);
    //     });
    //
    //     return this;
    // }
    //
    // /**
    //  * @private
    //  * @method _addListeners
    //  * @returns {AdminBundle}
    //  */
    // _addListeners() {
    //     let btn = document.querySelector(".clickme");
    //
    //     btn.addEventListener("click", () => {
    //         // this._login();
    //         // this._logout();
    //         // this._getUser();
    //     });
    //
    //     return this;
    // }

    init() {
        new Authorization(
            document.querySelector(".authorization"),
        ).init();
    }
}


window.addEventListener("DOMContentLoaded", () => {
    // new AdminBundle().init();
});









// let a = {
//     "event": "success",
//     "info": {
//         "id": "uw-file3",
//         "batchId": "uw-batch2",
//         "asset_id": "bd8f90d42139208f52738742ba9612ee",
//         "public_id": "wgce6mtfwf3w0szfu3qr",
//         "version": 1667252707,
//         "version_id": "a88cd4e309056a98ebd5335d9247657b",
//         "signature": "4cfbff75b1bc760005ddd18071a80b71d8bba913",
//         "width": 24,
//         "height": 24,
//         "format": "svg",
//         "resource_type": "image",
//         "created_at": "2022-10-31T21:45:07Z",
//         "tags": [],
//         "bytes": 4074,
//         "type": "upload",
//         "etag": "f9ad7f8436e295e5f28cd099fb20f6a6",
//         "placeholder": false,
//         "url": "http://res.cloudinary.com/hzqoxcal2/image/upload/v1667252707/wgce6mtfwf3w0szfu3qr.svg",
//         "secure_url": "https://res.cloudinary.com/hzqoxcal2/image/upload/v1667252707/wgce6mtfwf3w0szfu3qr.svg",
//         "folder": "",
//         "original_filename": "Fast delivery",
//         "path": "v1667252707/wgce6mtfwf3w0szfu3qr.svg",
//         "thumbnail_url": "https://res.cloudinary.com/hzqoxcal2/image/upload/c_limit,h_60,w_90/v1667252707/wgce6mtfwf3w0szfu3qr.jpg"
//     }
// }
