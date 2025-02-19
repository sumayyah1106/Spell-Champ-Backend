import { UserRepository } from '../repositories/index.js';
import { UserSchema } from '../models/index.js';

const users = new UserRepository();

const createDocService = async(data: unknown) => {
    try {
        const validatedData = UserSchema.parse(data);

        const docRef = await users.addDocument(validatedData);
        return docRef;
    } catch (error) {
        console.log("Error in create-doc service");
    };
};

const getAllDocsService = async() => {
    try {
        const documents = users.getAllDocuments();
        return documents;
    } catch (error) {
        console.log("Error in getAllDocs service");
    }
}

const getDocByIdService = async(docId: string) => {
    try {
        const document = users.getDocumentById(docId);
        return document;
    } catch (error) {
        console.log("Error in getDocById service"); 
    }
}

const UserServices = { createDocService, getAllDocsService, getDocByIdService};

export default UserServices;
