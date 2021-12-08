import React, { useState, useEffect } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';


export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            
    }

    const deleteTraining = (id) => {
        if (window.confirm('Do you want to delete training?'))
            fetch('https://customerrest.herokuapp.com/api/trainings/' + id, { method: 'DELETE' })
                .then(res => fetchData())
                .catch(err => console.error(err))
    }

    console.log(moment(trainings[0].date).format('DD-MM-YYYY h:mm'))

    const columns = [
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Customer firstname',
            accessor: 'customer.firstname'

        },
        {
            Header: 'Customer lastname',
            accessor: 'customer.lastname'
        },
        {
            sortable: false,
            filterable: false,
            widht: 50,
            accessor: 'id',
            Cell: row => <IconButton aria-label="delete" onClick={() => deleteTraining(row.value)}><DeleteIcon /></IconButton>
        }

    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}