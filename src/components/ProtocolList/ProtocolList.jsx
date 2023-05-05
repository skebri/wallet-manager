import { useState, useEffect} from 'react';
import { getProtcolList } from '../../services/apiService';

import './ProtocolList.scss';

export const ProtocolList = () => {
  const [protocolList, setProtocolList] = useState([])

  const getApiData = async () => {
    const data = await getProtcolList();

    setProtocolList(data);
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className="protocol-list">
    {protocolList.map(({ apy, tvl, name }) =>
      <div key={name} className="protocol-list-item">
        <div>{apy}</div>
        <div>{tvl}</div>
        <div>{name}</div>
      </div>
    )}
    </div>
  )
}
