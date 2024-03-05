import {TManga} from "./MangaTypes";

export interface IPropsForTManga extends TManga{
    mangaContent: TManga | null
    desc?: boolean
}