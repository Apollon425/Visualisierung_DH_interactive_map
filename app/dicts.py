import pandas as pd

test =[
    {"SBZ":"0","Name":"Mitte"}, 
    {"SBZ":"1","Name":"Nordost"}, 
    {"SBZ":"2","Name":"Ost"}, 
    {"SBZ":"3","Name":"Südost"}, 
    {"SBZ":"4","Name":"Süd"},
    
    {"SBZ":"5","Name":"Südwest"},
    {"SBZ":"6","Name":"West"},
    {"SBZ":"7","Name":"Alt-West"},
    {"SBZ":"8","Name":"Nordwest"},
    {"SBZ":"9","Name":"Nord"}
    ]

df = pd.read_csv('data/NDVI/2019/sbz_ndvi.csv')
name = df['Name']
ndvi = df['NDVI']

for index, name in enumerate(name):
    for test_dict in test:
        if name == test_dict["Name"]:
            test_dict['NDVI'] = ndvi[index]

print(test)

