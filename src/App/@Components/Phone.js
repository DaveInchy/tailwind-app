import React from 'react';

import Style from './Classes/Style';
import Wrapper from './Modules/Containers';

import EarthDark from '../@Assets/planet-earth.jpg';
import MarsDark from '../@Assets/planet-mars.jpg';
import PhoneBg from '../@Assets/gradienta-m_7p45JfXQo-unsplash.jpg';

import { LockOpenIcon, LightBulbIcon, CameraIcon, WifiIcon, ChartBarIcon, BeakerIcon } from '@heroicons/react/solid';

export default class Phone extends React.Component {
    render() {
        return (
            <>
                <Wrapper  style={new Style('height: 712px; width: 360px; border-radius: 60px; border-width: 14px;')} class="relative bg-black overflow-hidden shadow-xl border-black">
                    <img src={PhoneBg} alt="Phone background" class="absolute inset-0 w-full h-full object-cover" />
                    <Wrapper id="phone-ui-notch" class="absolute top-0 inset-x-0">
                        <Wrapper class="h-6 w-40 mx-auto bg-black rounded-b-3xl"></Wrapper>
                    </Wrapper>
                    <Wrapper id="phone-ui-top" class="relative">
                        <Wrapper class="mt-2 mr-5 flex justify-end space-x-1">
                            <ChartBarIcon class="w-4 h-4 text-white" />
                            <WifiIcon class="h-4 w-4 text-white" />
                            <BeakerIcon class="h-4 w-4 text-white" />
                        </Wrapper>
                        <Wrapper class="mt-1.5 h-0.5 w-10 bg-white rounded mr-7 ml-auto"></Wrapper>
                    </Wrapper>
                    <Wrapper id="phone-ui-clock" class="relative mt-3 text-center font-fira">
                        <LockOpenIcon class="w-10 h-10 mx-auto text-white" />
                        <p class="mt-3 text-white text-6xl font-extralight">9:12</p>
                        <p class="mt-1 text-white text-lg font-light">Monday, June 7</p>
                    </Wrapper>
                    <Wrapper id="phone-ui-summary" class="relative mt-4 mx-2">
                        <Wrapper style={new Style("background-color: rgba(255,255,255,0.1);")} class="absolute -bottom-4 inset-x-0 h-full backdrop-filter backdrop-blur-md rounded-3xl transform scale-90 origin-bottom"></Wrapper>
                        <Wrapper style={new Style("background-color: rgba(255,255,255,0.3);")} class="absolute -bottom-2 inset-x-0 h-full backdrop-filter backdrop-blur-md rounded-3xl transform scale-95 origin-bottom shadow-sm"></Wrapper>
                        <Wrapper style={new Style("background-color: rgba(255,255,255,0.4);")} class="font-mono p-4 backdrop-filter backdrop-blur-md rounded-3xl shadow">
                            <Wrapper class="flex justify-between">
                                <Wrapper class="text-black">
                                    <p class="text-xs font-light">9:01 AM</p>
                                    <h2 class="text-md font-bold normal-case">Your Morning Summary</h2>
                                </Wrapper>
                                <span class="flex items-center justify-center bg-white h-8 w-8 rounded-full text-dark font-bold">8</span>
                            </Wrapper>
                            <Wrapper class="mt-2 grid grid-cols-2 gap-2">
                                <Wrapper>
                                    <img src={EarthDark} alt="Earth dark" class="h-auto w-full rounded-lg" />
                                    <h3 class="mt-2 text-black text-xs font-bold normal-case">Moon & earth</h3>
                                    <p class="mt-1 text-black text-xs font-normal text-justify normal-case">The earth and the moon are partners until a big black hole destroys them</p>
                                </Wrapper>
                                <Wrapper>
                                    <img src={MarsDark} alt="Mars dark" class="h-auto w-full rounded-lg" />
                                    <h3 class="mt-2 text-black text-xs font-bold normal-case">Mars Sandstorm</h3>
                                    <p class="mt-1 text-black text-xs font-normal text-justify normal-case">an sandstorm has hit the middle -eastern region of Mars's base "Starbase"</p>
                                </Wrapper>
                            </Wrapper>
                            <hr class="mt-4 border-gray-600"></hr>
                            <Wrapper class="mt-3 grid grid-cols-3 gap-1 items-end">
                                <Wrapper class="col-span-2">
                                    <h3 class="text-black text-sm font-bold normal-case">Notifications</h3>
                                    <p class="mt-1 text-black text-xs font-normal text-justify normal-case">Reddit, Twitter, Instagram</p>
                                </Wrapper>
                                <ul class="flex flex-row-reverse -space-x-3 space-x-reverse">
                                    <li><img src='https://e7.pngegg.com/pngimages/612/982/png-clipart-reddit-logo-youtube-dressed-smiley-desktop-wallpaper-thumbnail.png' alt="application icon" class="rounded-md w-8 h-8 object-cover bg-white" /></li>
                                    <li><img src='https://www.europanostra.org/wp-content/uploads/2017/09/2017-09-Twitter-logo-780x780.png' alt="application icon" class="rounded-md w-8 h-8 object-cover bg-white" /></li>
                                    <li><img src='https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png' alt="application icon" class="rounded-md w-8 h-8 object-cover" /></li>
                                </ul>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper id="phone-ui-bottom" class="absolute bottom-0 inset-x-0 h-20">
                        <Wrapper class="flex justify-between px-10">
                            <button class="backdrop-filter backdrop-blur-md rounded-full p-2" style={new Style("background-color: rgba(88,88,88,0.4);")}>
                                <LightBulbIcon class="text-white h-8 w-8"></LightBulbIcon>
                            </button>
                            <button class="backdrop-filter backdrop-blur-md rounded-full p-2" style={new Style("background-color: rgba(88,88,88,0.4);")}>
                                <CameraIcon class="text-white h-8 w-8"></CameraIcon>
                            </button>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper class="absolute bottom-2 inset-x-0">
                        <Wrapper class="mx-auto h-1 w-28 bg-white rounded"></Wrapper>
                    </Wrapper>
                </Wrapper>
            </>
        );
    }
}