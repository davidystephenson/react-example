import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details () {
  const { id } = useParams()
  const url = `https://swapi.dev/api/people/${id}`
  console.log('id test:', id)

  const [person, setPerson] = useState({})

  useEffect(
    () => {
      async function getPerson () {
        try {
          const response = await axios
            .get(url)

          const { data } = response

          console.log('data test:', data)

          setPerson(data)
        } catch (error) {
          console.error(error)
        }
      }

      getPerson()
    },
    []
  )

  console.log('person test:', person)

  const traits = Object.keys(person)
  console.log('traits test:', traits)

  const headings = traits.map(trait => <th key={trait}>
    {trait}
  </th>)

  const cells = traits.map(trait => <td key={trait}>
    {person[trait]}
  </td>)
  
  return (
    <div>
      <h1>Details</h1>

      <table>
        <thead>
          <tr>
            {headings}
          </tr>
        </thead>
        <tbody>
          <tr>
            {cells}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details