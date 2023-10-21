                        //ESTRUTURA DE REPETIÇÃO: PULANDO UMA EXECUÇÃO DO LOOP: CONTINUE

                        //Dependendo da nossa lógica, podemos pular o resto da execução do loop;

                        //Para isso utilizamos a palavra continue
                        


                       while(x < 11) {
                            x = x + 1;
                            if(x % 2 == 0){
                                continue;
                            }

                            console.log(x)

                       }