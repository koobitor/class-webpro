x = [70  63  72  60  66  70  74  65  62  67  65  68];
y = [155 150 180 135 156 168 178 160 132 145 139 152];

x1 = linspace(50,80);

p1 = polyfit(x,y,1);
y1 = polyval(p1,x1);
subplot(3,1,1)
plot(x,y,'Hg',x1,y1);
title('Linear Function');
disp(p1)

p2 = polyfit(x,y,2);
y2 = polyval(p2,x1);
subplot(3,1,2)
plot(x,y,'Pg',x1,y2);
title('Quadratic Function');
disp(p2)

p3 = polyfit(x,y,3);
y3 = polyval(p3,x1);
subplot(3,1,3)
plot(x,y,'xg',x1,y3);
title('Cubic Function');
disp(p3)

y4 = polyval(p3,78)