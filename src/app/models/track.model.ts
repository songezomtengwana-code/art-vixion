import { FileModel } from "./file.model";
import { TrackReviewModel } from "./track-review.model";
import { TrackUrlModel } from "./track-url.model";

export interface TrackModel {
    trackId: string,
    art: FileModel,
    year: number,
    type: string,
    genre: string,
    contributes: string[],
    title: string,
    urls: TrackUrlModel[]
    reviews: TrackReviewModel[]
}