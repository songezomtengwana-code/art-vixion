import { FileModel } from "./file.model";
import { SocialsModel } from "./socials.model";
import { TrackModel } from "./track.model";

export interface ProfileModel {
    _id: Object,
    crew_id: string,
    createdon: string,
    lastused: string,
    name: string,
    image: FileModel,
    coverImage: FileModel,
    bio: string,
    tag: string,
    tags: string[],
    socials: SocialsModel[],
    discography: TrackModel[],
    gallery: FileModel[],
    type: string,
    gender: string,
    isPrivate: boolean,
    isSuspended: boolean,
    status: string
}