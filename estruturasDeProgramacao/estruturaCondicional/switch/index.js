                        //ESTRUTURA DE CONDIÇÃO: switch

                        // Quando há a necessidade de vários ifs, podemos utilizar o switch/case ;

                        // Para sair de um case podemos utilizar o break;

                        // Podemos inserir uma expressao default, para case nenhum valor for  correspondido

                        //Obs muitos programadores optam por usar vários ifs


                        switch(nome) {
                            case "João":
                                console.log("O seu nome é João");
                                break;
                            case "Marcos":
                                console.log("O seu nome é Marcos");
                                break;
                            default:
                                console.log("O seu nome não é João nem Marcos!")
                                break;
                        }
