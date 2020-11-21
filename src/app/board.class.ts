export class Board {
    public isChanges: boolean = false;
    constructor(public boardName: string, private imagesUrls: string[], private newImageUrl: string[], public lastImageUrl: string) {
        this.imagesUrls=[];
        //this.imagesUrls = ["https://images3.alphacoders.com/105/1052299.jpg", "https://images4.alphacoders.com/101/thumb-1920-1016433.png", "https://images.unsplash.com/photo-1541892079-2475b9253785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"];
    }
    public checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    public testImage(url, timeoutT) {
        return new Promise(function (resolve, reject) {
            var timeout = timeoutT || 5000;
            var timer, img = new Image();
            img.onerror = img.onabort = function () {
                clearTimeout(timer);
                reject("error");
            };
            img.onload = function () {
                clearTimeout(timer);
                resolve("success");
            };
            timer = setTimeout(function () {
                img.src = "//!!!!/test.jpg";
                reject("timeout");
            }, timeout);
            img.src = url;
        });
    }
    /**
     * AddImage
     */
    public AddImage() {
       // if (this.checkURL(this.lastImageUrl)) {
            this.testImage(this.lastImageUrl, 2000).then(value => {
                this.newImageUrl.push(this.lastImageUrl);
                this.isChanges = true;
                this.lastImageUrl = "";
            }, reason => { this.lastImageUrl = ""; })

      //  }

    }
    /**
     * DiscardCanges
     */
    public DiscardChanges() {
        this.newImageUrl = [];
        this.isChanges = false;
    }
    /**
     * SaveBoard
     */
    public SaveBoard() {
        this.imagesUrls = this.imagesUrls.concat(this.newImageUrl);
        this.isChanges = false;
        this.newImageUrl = [];
    }
    /**
     * getAllImages
     */
    public getAllImages(): string[] {
        return this.imagesUrls.concat(this.newImageUrl);
    }
}