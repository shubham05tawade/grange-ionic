import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { uploadBytes } from 'firebase/storage';
 
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  url;

  constructor(private firestore: Firestore, private storage: Storage) { 
    this.url = ""
  }

async uploadFile(file: any){
    const path = `uploads/${file.name}`;
    const storageRef = ref(this.storage, path);
    return await uploadBytes(storageRef, file)
}


}
