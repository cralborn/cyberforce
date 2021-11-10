import React from 'react';
import '../data/lakesdams.scss';
import styled, { css } from 'styled-components/macro';
import { SliderData } from '../data/SliderData';
import Lakes from '../Lakes';
import axios from 'axios';

function OurLakesDams(){

    
    return(
        <div id="main">
        <div id="intro">
            <div id="container">
               <div className="container-row">
                <div className="col-md-6 col-pad-right">
                    <h1 className="section-title">
                        Our Lakes & Dams
                        </h1>
                    <div className="content">
                        <p>
                            InnovoEnergy has been the trusted energy resource of the south since 1989. We strive to maintain a clean and renewable energy source for all our serviceable area.
                        </p>
                        <br />
                        <p>
                            Providing sustainable electricity to all our valued customers is our top priority and our pride and joy.
                        </p>
                        <br />
                        <p>
                            Kuma Lake is providing our hydroelectric dam with a vast amount of power generation every year and helps to feed and regulate Lumi River.
                        </p>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Lakes">
                            </div>
                    </div>
               </div>
            </div>

        </div>
        </div>
    );
}

export default OurLakesDams