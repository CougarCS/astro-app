import axios from "axios";
import ContactModel from "../models/contact.model";
import { API_BASE_URL } from "../utils/config";

class MemberService {

    static async getMembers(): Promise<ContactModel[]> {
        const result = await axios.get(`${API_BASE_URL}/member/all`);
        const { members }  = result.data
        return members;
    }

}

export default MemberService;