import { Injectable } from '@angular/core';
import { ProfileModel } from '../models/profile.model';
import { crewCollection } from '../db/crew';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crew_container: ProfileModel[] = [];

  constructor() {}

  getCrew(collection: string) {
    if (!collection) {
      return [];
    } else if (collection == 'crew') {  
      return (this.crew_container = crewCollection);
    } else {
      return console.error(
        'no collection name was passed, unable to retrieve collection data'
      );
    }
  }

  get crewCollectionResponse(): ProfileModel[] {
    return this.crew_container;
  }

  /**
   * 
   * @param collection 
   * @param payload 
   * @returns 
   */
  postCrewMemeber(collection: string, payload: ProfileModel) {
    if (!collection || !payload) {
      return [];
    } else if (collection == 'crew') {
      console.log('crew collections document count: ' + crewCollection.length);

      try {
        crewCollection.push(payload);
        console.log(
          'document added new crew collections document count: ' +
            crewCollection.length
        );
      } catch (erorr) {
        return console.error(
          'something went wrong with updating the crew collection'
        );
      }

      return console.log('aight all is good my brother');
    } else {
      return console.error(
        'no collection name was passed, unable to retrieve collection data'
      );
    }
  }
}
