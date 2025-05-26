import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { dollars } from '../../utils/icons';
import { useGlobalContext } from '../../context/globalContext';

function Dashboard(){
    useGlobalContext()
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className='stats-con'>
                    <div className='chart-con'>
                        <Chart />
                        <div className='amount-con'>
                            <div className='income'>
                                <h2>Total Income</h2>
                                <p>{dollars}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard;