import { Directive, HostListener } from "@angular/core";

@Directive({
  selector : "[appFileUpload]"
})
export class FileUploadDirective{

  @HostListener("dragover")
  ondragover(){
    console.log("Drag over ")
  }

  @HostListener("drag")
  ondrop(){
    console.log("Dropped")
  }

  @HostListener("click")
  onclick(){
    console.log("Clicked")
  }


}
