import React, { useEffect, useState } from "react";
import YMap from "../components/map";
import { getUsersAddresses } from "../services/user-info";
function LocationPage() {
    const [addresses, setAddresses] = useState(null);
    useEffect(() => {
        (async () => {
            setAddresses(await getUsersAddresses())
        })()
    }, [])

    if (addresses) {
        return (<div>
            <YMap addresses={addresses} />
        </div>
        )
    }
    return (
        <div className="mx-16">
            <h2>Загрузка...</h2>
        </div>
    )
}

export default LocationPage;