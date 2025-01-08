import { useContext } from "react";
import { AuthContext } from "../context";

export default function useAuth() {

    const auth = useContext(AuthContext);

    return auth;

};