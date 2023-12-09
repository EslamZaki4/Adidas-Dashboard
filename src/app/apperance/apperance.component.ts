import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.css']
})
export class ApperanceComponent implements OnInit {
  @ViewChild('outputRef') outputRef!: ElementRef;
  @ViewChild('htmlRef') htmlRef!: ElementRef;
  @ViewChild('cssRef') cssRef!: ElementRef;
  @ViewChild('jsRef') jsRef!: ElementRef;
  @ViewChild('hexRef') hexRef!: ElementRef;
  @ViewChild('nameRef') nameRef!: ElementRef;
  @ViewChild('rgbRef') rgbRef!: ElementRef;
  @ViewChild('hslRef') hslRef!: ElementRef;

  cover = { men: '', women: '', kids: '', home: '' };

  ngOnInit() {
    this.getImagecover();

  }



  async getImagecover() {


    const doc = await this.db.getDocument("setting", "apperance")
    this.cover = (doc?.['cover']);
    console.log(this.cover)

  }


  async setImagecover() {


    await this.db.updateDocument("setting", "apperance", {
      cover:this.cover
    })

    alert('saved');
  }







  isBorderVisible1: boolean = false;
  isBorderVisible2: boolean = false;
  isBorderVisible3: boolean = false;
  isHideEverything: boolean = false;


  toggleBorder1() {
    this.isBorderVisible1 = !this.isBorderVisible1;
    if (this.isBorderVisible1) {
      this.isBorderVisible2 = false;
      this.isBorderVisible3 = false;
    }
  }


  HideEverything() {
    this.isHideEverything = !this.isHideEverything;

  }


  toggleBorder2() {
    this.isBorderVisible2 = !this.isBorderVisible2;
    if (this.isBorderVisible2) {
      this.isBorderVisible1 = false;
      this.isBorderVisible3 = false;
    }
  }
  toggleBorder3() {
    this.isBorderVisible3 = !this.isBorderVisible3;

    if (this.isBorderVisible3) {
      this.isBorderVisible1 = false;
      this.isBorderVisible2 = false;
    }
  }

  selectedOption: string = '';

  onOptionChange() {
    console.log('Selected Option:', this.selectedOption);
    // You can perform any action here based on the selected option
  }



  funck() {
    this.HideEverything()
    const output = this.outputRef.nativeElement;
    const html = this.htmlRef.nativeElement;
    const css = this.cssRef.nativeElement;
    const js = this.jsRef.nativeElement;
    console.log('innerHTML', html.value + '<style>' + css.value + '</style><script>' + js.value + '</script>')
    this.renderer.setProperty(output, 'innerHTML', html.value + '<style>' + css.value + '</style><script>' + js.value + '</script>');
    //  this.document.getElementById('textarea3')?.innerHTML = '<h1>hello world<h1>';
  }

  lightsalmon() {

    const nameRef = this.nameRef.nativeElement;
    nameRef.value = "lightsalmon"
    const hexRef = this.hexRef.nativeElement;
    hexRef.value = "#ffa07a"
    const hslRef = this.hslRef.nativeElement;
    hslRef.value = "hsl(17, 100%, 74%)"
    const rgbRef = this.rgbRef.nativeElement;
    rgbRef.value = "rgb(255, 160, 122)"


  }


  lightseagreen() {
    const nameRef = this.nameRef.nativeElement;
    nameRef.value = "lightseagreen"
    const hexRef = this.hexRef.nativeElement;
    hexRef.value = "#20b2aa"
    const hslRef = this.hslRef.nativeElement;
    hslRef.value = "hsl(177, 70%, 41%)"
    const rgbRef = this.rgbRef.nativeElement;
    rgbRef.value = "rgb(32, 178, 170)"

  }


  lightyellow() {

    const nameRef = this.nameRef.nativeElement;
    nameRef.value = "lightyellow"
    const hexRef = this.hexRef.nativeElement;
    hexRef.value = "#fafad2"
    const hslRef = this.hslRef.nativeElement;
    hslRef.value = "hsl(60, 80%, 90%)"
    const rgbRef = this.rgbRef.nativeElement;
    rgbRef.value = "rgb(250, 250, 210)"
  }


  lightblue() {
    const nameRef = this.nameRef.nativeElement;
    nameRef.value = "lightblue"
    const hexRef = this.hexRef.nativeElement;
    hexRef.value = "#add8e6"
    const hslRef = this.hslRef.nativeElement;
    hslRef.value = "hsl(195, 53%, 79%)"
    const rgbRef = this.rgbRef.nativeElement;
    rgbRef.value = "rgb(173, 216, 230)"

  }

  async saveLoader() {


    const html = this.htmlRef.nativeElement;
    const css = this.cssRef.nativeElement;
    const js = this.jsRef.nativeElement;


    await this.db.updateDocument('setting', 'apperance', {
      loader: {
        html: html.value.replaceAll('loader', 'onlineloaderelement'),
        css: css.value.replaceAll('loader', 'onlineloaderelement'),
        js: js.value.replaceAll('loader', 'onlineloaderelement')
      }
    });


    alert('saved')


  }

  async saveNav() {


    const nameRef = this.nameRef.nativeElement;
    const hexRef = this.hexRef.nativeElement;
    const hslRef = this.hslRef.nativeElement;
    const rgbRef = this.rgbRef.nativeElement;


    let thecolor;
    if (nameRef.value.length > 0) {
      thecolor = nameRef.value
    } else if (hexRef.value.length > 0) {
      thecolor = hexRef.value
    } else if (hslRef.value.length > 0) {
      thecolor = hslRef.value
    } else if (rgbRef.value.length > 0) {
      thecolor = rgbRef.value
    }


    await this.db.updateDocument('setting', 'apperance', {
      navcolor: thecolor
    });


    alert('saved')


  }





  constructor(private renderer: Renderer2, private db: FirebaseService) { }

}
