import { Route } from "react-router-dom"
import {Routes as RoutesDom} from "react-router-dom"
import { Characters, Chronology, Home, Houses } from "../Pages"


export default function Routes(){
    return <RoutesDom>
                <Route path="/" element={<Home/>} Route/>
                <Route path="/characters" element={<Characters/>} Route/>
                <Route path="/houses" element={<Houses/>} Route/>
                <Route path="/chronology" element={<Chronology/>} Route/>
            </RoutesDom>
}