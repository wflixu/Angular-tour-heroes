import { Component, OnInit, ContentChild, TemplateRef } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.less"]
})
export class NameEditorComponent implements OnInit {
  name = new FormControl("");
  public show:boolean = true;
  @ContentChild('editorContent', { static: true }) editorContent: TemplateRef<void>;
  constructor() {}


  ngOnInit() {
    console.log(this.editorContent);

    // if(this.editorContent){
    //   this.show = true;
    // }else {
    //   this.show = false;
    // }
  }

  updateName() {
    this.name.setValue('Nancy');
  }
}
