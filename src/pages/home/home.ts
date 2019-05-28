import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController ,private noteService: NoteServiceProvider) {

  }

  ionViewDidEnter() {
   this.notes = this.noteService.getAllNotes();
    console.log("Fireed");
    
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  getAllNotes(){
    return this.noteService.getAllNotes();
  }

  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n)=>{
      this.note = n;

      this.navCtrl.push(ViewNotePage, {note: this.note})
    })

  }

}
