import React from 'react'
import SuperHeroes from '../SuperHeroes/SuperHeroes';
import Novedades from '../Novedades/Novedades';

export default function Content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 bg-danger">
                    <SuperHeroes/>
                </div>
                <div className="col-4 bg-dark">
                    <Novedades/>
                </div>
                
            </div>
        </div>
    )
}
