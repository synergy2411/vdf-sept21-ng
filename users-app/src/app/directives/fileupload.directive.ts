import { Directive, HostListener } from "@angular/core";

@Directive({
  selector : "[appFileUpload]"
})
export class FileUploadDirective{

  @HostListener("dragover", ["$event"])
  ondragover(event){
    event.preventDefault()
    console.log("Drag over ")
  }

  @HostListener("drop", ['$event'])
  ondrop(ev){
    console.log("Dropped")
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }



}
