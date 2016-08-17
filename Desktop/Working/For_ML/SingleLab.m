x01=0 ;
x02=0 ;
x03=0 ;

disp('Single Step Iteration')
fprintf(' \n');
disp('64x1 -3x2 -x3 = 14 ')
disp('x1 + x2 + 40x3 = 20 ')
disp('2x1 - 90x2 + x3 = -5')

E1 = @(x2,x3) 0.21875 + 0.04688*(x2) + 0.01563*(x3);
E2 = @(x1,x3) 0.05556 + 0.02222*(x1) + 0.01111*(x3);
E3 = @(x1,x2) 0.50000 - 0.02500*(x1) - 0.02500*(x2);

fprintf(' \n ');
disp('j      x1^(j+1)       x2^(j+1)       x3^(j+1)')

for i = 1:10
    
 x1 = E1(x02,x03);
 x2 = E2(x01,x03);
 x3 = E3(x01,x02);
 
 m = max(abs(x1-x01),abs(x2-x02));
 m1 = max(m,abs(x3-x03));
 
 if (m1 < 0.5*(10^-5))
      break;
 end
 
 fprintf(' %d      %.5f        %.5f        %.5f \n',i-1,E1(x02,x03),E2(E1(x02,x03),x03),E3(E1(x02,x03),E2(E1(x02,x03),x03)));
   
    x01 = E1(x02,x03);
    x02 = E2(E1(x02,x03),x03);
    x03 = E3(x01,E2(E1(x02,x03),x03));
      
end

fprintf('\n x1 = %.5f , x2 = %.5f , x3 = %.5f \n',E1(x02,x03),E2(E1(x02,x03),x03),E3(E1(x02,x03),E2(E1(x02,x03),x03)));


