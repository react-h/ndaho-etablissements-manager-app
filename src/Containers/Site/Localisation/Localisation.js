import React from 'react';
import useFetchData from '../../../hooks/useFetchData';

const Localisation = (props) => {
const dataInfos=useFetchData("https://etablissements-publics.api.gouv.fr/v3/departements/35/mairie")
console.log(dataInfos)
    return (
        <>
            Localisation ---# deja fait sur l'ancien version
        </>
    )
}


export default Localisation;