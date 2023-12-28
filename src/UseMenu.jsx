import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
import AxiosOpen from './AxiosOpen';

const UseMenu = () => {
  const axiosOpen = AxiosOpen()
  //   const [menu, setMenu] = useState([]);
  //   const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data)
  //       setLoading(false)
  //     });
  // }, []);
  const {data:menu, isPending:loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async()=> {
      const res = await axiosOpen.get('/menu') 
      return res.data
    }
  })
    return [menu, loading, refetch]
};

export default UseMenu;