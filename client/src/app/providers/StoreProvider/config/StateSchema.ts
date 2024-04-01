import { CardSchema } from "entities/Card/model/types/CardSchema";
import { SetingDocumentsSchema } from "entities/SetingDocuments";
import { FormCardSchema } from "features/FormCard/model/types/FormCardSchema";
import { DownloadDocs } from "features/downloadDocs";


export interface StateSchema {
    setingDocuments: SetingDocumentsSchema;
    formCard: FormCardSchema;
    cards: CardSchema[];
    downloadDocs: DownloadDocs
}