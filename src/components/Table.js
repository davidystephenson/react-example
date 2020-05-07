import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Table() {
  const [people, setPeople] = useState([])

  useEffect(
    () => {
      async function getPeople () {
        try {
          const response = await axios
            .get('https://swapi.dev/api/people/')

          const { data } = response

          console.log('data test:', data)

          const { results } = data

          setPeople(results)
        } catch (error) {
          console.error(error)
        }
      }

      getPeople()
    },
    []
  )

  const rows = people.map(person => {
    const { url, name, height, mass } = person
    console.log('url test:', url)

    const id = url.slice(28, url.length - 1)

    return <tr key={name}>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
      <td>{id}</td>
      <td>
        <Link to={`/details/${id}`}>
          <button>Details</button>
        </Link>
      </td>
    </tr>
  })

  return (
    <div>
      <h1>People</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Id</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>

      {people.length}
    </div>
  );
}

export default Table
