import React from 'react'
import '../styles/AllinOne.css'

const ReusltTable = () => {
  return (
   <>
        <div className='container'>
            <div className=''>
                    <table className='quiz-table'>
                        <thead >
                            <tr className='quiz-table-thead'>
                                <td>Name</td>
                                <td>Attempts</td>
                                <td>Earn Points</td>
                                <td>Results</td>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>user1</td>
                                    <td>02</td>
                                    <td>20</td>
                                    <td>Passed</td>
                                </tr>
                        </tbody>
                    </table>
            </div>
        </div>
   </>
  )
}

export default ReusltTable