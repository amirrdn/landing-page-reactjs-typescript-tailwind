import React from "react";
import imgInfo from '../assets/info-bleu-1.svg'
import imgVerfie from '../assets/verifie-1.svg'
import imgVerfiea from '../assets/verifie-a.png'
import imgPay from '../assets/payment.png'
import imgPoint from '../assets/point-dinterrogation 1.png'
import imgVer21 from '../assets/verifie2 1.svg'
import imgChevrownDown from '../assets/fleche-vers-le-bas 4.svg'
import imgTlp from '../assets/test_encars_tel 1.png'
import imgPouce from '../assets/pouce-en-lair 1.png'
import imgCitation from '../assets/citation 1.png'
import imgPoeple1 from '../assets/Ellipse 5.png'
import imgPeople2 from '../assets/people-2.png'
import imgPeople3 from '../assets/people3.png'

const Home:React.FC = () => {

    return(<>
        <div className="mt-3 max-sm:hidden lg:px-[74px] lg:py-[37px] bg-white">
            <div className="grid grid-cols-9 gap-x-6 text-center">
                <div className="p-4 col-span-3">
                    <p className="header-a blue-hex">ENREGISTREMENT EN LIGNE</p>
                    <p className="header-a font-bold blue-hex">CESSION DE VOTRE VÉHICULE</p>
                </div>
                <div className="p-4 col-span-5">
                    <div className="flex font-w-1">
                        <div className="w-[30%] text-left">
                            <span>CERFA DE CESSION</span>
                        </div>
                        <div className="w-[50%] text-left pe-0">
                            <span>DÉCLARATION DE VENTE D’UN VÉHICULE EN LIGNE</span>
                        </div>
                        <div>
                            <span>ACtualités</span>
                        </div>
                    </div>
                </div>
                <div className="py-4 float-left col-span-1">
                    <button className="btn-elipse">espace client</button>
                </div>
            </div>
        </div>
        <div className="mt-3 w-full lg:px-[74px] lg:py-[37px] bg-white overflow-hidden">
            <div className=" p-4">
                <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 monsterat">
                    <div className="lg:col-span-2">
                        <p className="font-[600] text-[45px]">Bienvenue !</p>
                        <p className="text-[48px] font-[600] mt-5"><span className="color-blue">Déclaration de cession</span> <span className="font-[500]"> auprès de</span> <span className="font-[700] color-blue">l'ANTS</span></p>
                        <div className="flex flex-row mt-20">
                            <div className="elipse-a text-white text-[17px] font-[600] relative top-1">1</div>
                            <div className="px-2 color-blue text-[20px] font-[600] w-full">Immatriculation</div>
                        </div>
                        <div className="h-[58px] mt-4 bg-gray-200 lg:w-[679px] px-4 py-4 font-[500] text-[20px] text-gray-500">AA-123-AA</div>
                        <div className="flex flex-row mt-4">
                            <div className="elipse-a text-white text-[17px] font-[600] relative top-1">2</div>
                            <div className="px-2 color-blue text-[20px] font-[600] w-full">Date de la vente</div>
                        </div>
                        <div className="h-[58px] mt-4 bg-gray-200 lg:w-[679px] px-4 py-4 font-[500] text-[20px] text-gray-500">JJ/MM/AAAA</div>
                        <div className="flex flex-row mt-4">
                            <div className="elipse-a text-white text-[17px] font-[600] relative top-1">3</div>
                            <div className="px-2 color-blue text-[20px] font-[600] w-full">heure de la vente</div>
                        </div>
                        <div className="h-[58px] mt-4 bg-gray-200 lg:w-[679px] px-4 py-4 font-[500] text-[20px] text-gray-500">--:--</div>
                        <button className="btn-suivant font-[600] text-[24px] rounded-lg my-20">Suivant</button>
                    </div>
                    <div className="monsterat max-sm:p-4">
                        <img src={imgInfo} alt="img-blue" className="relative top-3 -left-4"/>
                        <p className="text-center font-[500] text-[18px]">Agréé & Habilité <span className="blue-hex font-[600]">Ministère de l'Intérieur</span></p>
                        <p className="text-center font-[500] text-[18px]">Agrément Préfecture <span className="blue-hex font-[700]">N°59783</span></p>
                        <div className="grid grid-cols-4 gap-3 mt-10">
                            <div className="rounded-full border-2 py-2 px-4 border-blue-800 text-blue-800 font-[600] text-[14px]">Etape 1</div>
                            <div className="py-2 px-4 border-blue-800 text-blue-800 font-[600] text-[14px]">Etape 2<span className="absolute after:content-['.....'] right-[17%] z-20"></span></div>
                            <div className="py-2 px-4 border-blue-800 text-blue-800 font-[600] text-[14px]">Etape 3<span className="absolute after:content-['.....'] right-[8.8%] z-20"></span></div>
                            <div className="py-2 px-4 border-blue-800 text-blue-800 font-[600] text-[14px]">Etape 4</div>
                        </div>
                        <div className="mt-10 w-full clear-both">
                            <div className="flex flex-row">
                                <img src={imgVerfie} className="relative -top-4" alt="rtes"/>
                                <div className="w-[399px] px-2 lexand font-[700] text-[25px]">Enregistrement de Cession en ligne</div>
                            </div>
                            <ol className="relative border-s border-gray-200 mt-4">
                                <li className="mb-10 ms-4 worksana">
                                    <div className="absolute w-7 h-7 elipse-b rounded-full mt-1.5 -start-3.5 border border-white text-center text-white">1</div>
                                    <div className="font-[400] text-[16px] leading-none top-3 ml-2 relative">Enregistrez les 3 informations</div>
                                </li>
                                <li className="mb-10 ms-4 worksana">
                                    <div className="absolute w-7 h-7 bg-gray-300 rounded-full mt-1.5 -start-3.5 border border-white text-center text-white">2</div>
                                    <div className="font-[400] text-[16px] leading-none top-3 ml-2 relative">Renseigner les informations du vendeur</div>
                                </li>
                                <li className="mb-10 ms-4 worksana">
                                    <div className="absolute w-7 h-7 bg-gray-300 rounded-full mt-1.5 -start-3.5 border border-white text-center text-white">3</div>
                                    <div className="font-[400] text-[16px] leading-none top-3 ml-2 relative">Renseigner les informations de l’acheteur</div>
                                </li>
                                <li className="mb-10 ms-4 worksana">
                                    <div className="absolute w-7 h-7 bg-gray-300 rounded-full mt-1.5 -start-3.5 border border-white text-center text-white">4</div>
                                    <div className="font-[400] text-[16px] leading-none top-3 ml-2 relative">Suivi de votre demande</div>
                                </li>

                            </ol>
                        </div>
                        <div className="block justify-between items-center mt-10 px-4 worksana text-white">
                            <div className="text-center">
                                <div className="rounded-lg border-1 border-grn">
                                    <div className="bg-greens p-4 rounded-t-lg font-[600] text-[25px]">PAIEMENT Sécurisé</div>
                                    <div className="px-1 py-2 relative flex flex-row">
                                        <img src={imgVerfiea} className="h-14" alt="a"/>
                                        <img src={imgPay} alt="b" className="h-14 pl-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-3 lg:px-[74px] py-[37px] bg-white">
            <div className="block justify-between items-center max-w-screen-lg mx-auto pb-10 mt-40 clear-both">
                <div className="w-full text-center monsterat">
                    <img src={imgPoint} className="mx-auto" alt="ab"/>
                    <div className="mt-4 font-[500] text-[30px]">Nos <span className="color-blue">équipes</span> répondent <br />à vos questions</div>
                </div>
            </div>
            <div className="mt-4 px-6 py-2 flex monsterat shadow-2xl bg-white">
                <div className="w-auto">
                    <img src={imgVer21} alt="cc" />
                </div>
                <div className="w-[94%] font-[500] text-[25px] px-4">Quand <span className="color-blue">enregistrer</span> la cession de mon véhicule ?</div>
                <div className="lg:w-[2%] float-right">
                    <img src={imgChevrownDown} className="float-end w-6 py-3" alt="ccd" />
                </div>
            </div>
            <div className="mt-4 px-6 py-2 flex monsterat shadow-2xl bg-white">
                <div className="w-auto">
                    <img src={imgVer21} alt="cc" />
                </div>
                <div className="w-[94%] font-[500] text-[25px] px-4">De quelle <span className="color-blue">manière</span> vais-je recevoir mon <span className="color-blue">accusé</span> d’enregistrement de cession ?</div>
                <div className="lg:w-[2%] float-right">
                    <img src={imgChevrownDown} className="float-end w-6 py-3" alt="ccd" />
                </div>
            </div>
            <div className="mt-4 px-6 py-2 flex monsterat shadow-2xl bg-white">
                <div className="w-auto">
                    <img src={imgVer21} alt="cc" />
                </div>
                <div className="w-[94%] font-[500] text-[25px] px-4">Pourquoi <span className="color-blue">enregistrer</span> la cession de mon véhicule ?</div>
                <div className="lg:w-[2%] float-right">
                    <img src={imgChevrownDown} className="float-end w-6 py-3" alt="ccd" />
                </div>
            </div>
            <div className="mt-4 px-6 py-2 flex monsterat shadow-2xl bg-white">
                <div className="w-auto">
                    <img src={imgVer21} alt="cc" />
                </div>
                <div className="w-[94%] font-[500] text-[25px] px-4">Combien de temps la <span className="color-blue">démarche</span> prend ?</div>
                <div className="w-[2%] float-right">
                    <img src={imgChevrownDown} className="float-end w-6 py-3" alt="ccd" />
                </div>
            </div>
            <div className="mt-4 px-6 py-2 flex monsterat shadow-2xl bg-white">
                <div className="w-auto">
                    <img src={imgVer21} alt="cc" />
                </div>
                <div className="w-[94%] font-[500] text-[25px] px-4">Le paiement est-il <span className="color-blue">sécurisé</span> ?</div>
                <div className="w-[2%] float-right">
                    <img src={imgChevrownDown} className="float-end w-6 py-3" alt="ccd" />
                </div>
            </div>
            <div className="mt-4 px-6 py-2 flex monsterat shadow-2xl bg-white">
                <div className="w-auto">
                    <img src={imgVer21} alt="cc" />
                </div>
                <div className="w-[94%] font-[500] text-[25px] px-4">Puis-je vous <span className="color-blue">confier</span> mes démarches ?</div>
                <div className="w-[2%] float-right">
                    <img src={imgChevrownDown} className="float-end w-6 py-3" alt="ccd" />
                </div>
            </div>
            <div className="block justify-between items-center max-w-screen-lg mx-auto pb-10 mt-40 clear-both">
                 <div className="w-full text-center monsterat">
                    <img src={imgTlp} className="mx-auto" alt="ab"/>
                    <div className="mt-4 font-[500] text-[30px] italic">Numéro surtaxé pour un premier contact <br />un numéro gratuit vous sera communiqué après commande</div>
                </div>
            </div>
            <div className="block justify-between items-center max-w-screen-lg mx-auto pb-10 mt-40 clear-both">
                 <div className="w-full text-center monsterat">
                    <img src={imgPouce} className="mx-auto" alt="ab"/>
                    <div className="mt-4 font-[500] text-[30px] italic">Les avis de nos clients</div>
                </div>
            </div>
            <div className="grid max-sm:lg-grid-cols-1 lg:grid-cols-3 gap-3 px-6">
                <div>
                    <div className="bg-white shadow-lg p-4 min-h-80">
                        <img src={imgCitation} className="float-start" alt="test"/>
                        <div className="float-end py-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                        <p className="clear-start clear-end text-justify">"Une expérience parfaite pour obtenir ma déclaration de cession! Le processus a été rapide et efficace. J'ai été guidé à chaque étape, et le service client était exceptionnel. Je recommande vivement cette démarche à tous ceux qui recherchent une solution sans tracas.”</p>
                    </div>
                    <div className="flex mt-10">
                        <img src={imgPoeple1} alt="pe" className="w-20 h-20"/>
                        <div className="w-[100%] px-4">
                            <p className="relative top-2 font-[700] text-[25px] lexand">Elisa L.</p>
                            <p className="relative top-3 monsterat color-blue font-[500] text-[18px]">Client du 22 Février 2024</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-lg p-4 min-h-80">
                        <img src={imgCitation} className="float-start" alt="test"/>
                        <div className="float-end py-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                        <p className="clear-start clear-end text-justify">"Je suis vraiment ravie de mon expérience sur cette plateforme pour la déclaration de cession de mon véhicule. Le processus était simple et rapide, et j'ai été impressionnée par la facilité de navigation.”</p>
                    </div>
                    <div className="flex mt-10">
                        <img src={imgPeople2} alt="pe" className="w-20 h-20"/>
                        <div className="w-[100%] px-4">
                            <p className="relative top-2 font-[700] text-[25px] lexand">Gabriel B.</p>
                            <p className="relative top-3 monsterat color-blue font-[500] text-[18px]">Client du 15 Février 2024</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-lg p-4 min-h-80">
                        <img src={imgCitation} className="float-start" alt="test"/>
                        <div className="float-end py-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-200 float-left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                        <p className="clear-start clear-end text-justify">"Je tiens à exprimer ma satisfaction quant à mon expérience récente sur cette plateforme pour la déclaration de cession de mon véhicule. Le processus était incroyablement facile et intuitif. J'ai pu saisir toutes les informations nécessaires en quelques minutes seulement, et j'ai apprécié la clarté des instructions fournies à chaque étape.</p>
                    </div>
                    <div className="flex mt-10">
                        <img src={imgPeople3} alt="pe" className="w-20 h-20"/>
                        <div className="w-[100%] px-4">
                            <p className="relative top-2 font-[700] text-[25px] lexand">Hector E.</p>
                            <p className="relative top-3 monsterat color-blue font-[500] text-[18px]">Client du 7 janvier 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Home;