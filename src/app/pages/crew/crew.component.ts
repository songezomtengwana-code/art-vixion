import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profile.model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  crew: ProfileModel[] = [
    {
      _id: Math.random(),
      bio: 'Some Random Biography',
      coverImage: {
        bytes: 0,
        fileFolder: '',
        fileId: '',
        fileLink: '',
        fileName: '',
        fileSizeInMbs: 0,
        fileType: '',
      },
      createdon: '',
      crew_id: '',
      discography: [
        {
          art: {
            bytes: 0,
            fileFolder: '',
            fileId: '',
            fileLink: '',
            fileName: '',
            fileSizeInMbs: 0,
            fileType: '',
          },
          contributes: [],
          genre: '',
          reviews: [
            {
              rating: 4,
              reviewDate: '',
              reviewer: '',
              reviewId: '',
              reviewText: '',
            },
          ],
          title: '',
          trackId: '',
          type: '',
          urls: [
            {
              color: '',
              platform: '',
              platformIcon: '',
              url: '',
            },
          ],
          year: 0,
        },
      ],
      gallery: [
        {
          bytes: 0,
          fileFolder: '',
          fileId: '',
          fileLink: '',
          fileName: '',
          fileSizeInMbs: 0,
          fileType: '',
        },
      ],
      gender: '',
      image: {
        bytes: 0,
        fileFolder: '',
        fileId: '',
        fileLink: '',
        fileName: '',
        fileSizeInMbs: 0,
        fileType: '',
      },
      isPrivate: true,
      isSuspended: true,
      lastused: '',
      name: 'Enksosi Tsotsa',
      socials: [
        {
          active: true,
          platform: '',
          socialId: '',
          url: '',
          username: '',
        },
      ],
      tag: 'MakhandaZonke ZA',
      status: '',
      type: 'artist',
      tags: ['CEO', 'Music Producer', 'Sound Engineer'],
    },
  ];

  ngOnInit(): void {
    console.log('crew oninit active');
  }
}
