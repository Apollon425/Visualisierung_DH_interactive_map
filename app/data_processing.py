import pandas as pd
from pathlib import Path
import glob
import sys
import json

PATH = "data/Einkommen/"

def get_files(PATH):
    filenames = (glob.glob(PATH+"*"+".csv"))
    filenames = [Path(x) for x in filenames] 

    return filenames



def change_to_csv_with_commas():
    files = get_files(PATH)
    print(files)

    for file in files:
        
        df = pd.read_csv(file, sep=";")
        df['Einkommen'] = df['Einkommen'].astype(str)
        df.to_csv(path_or_buf=file, sep=",")


def read_json_to_df():
    # df = pd.read_json('sbz.json')
    # print(df)
    with open('C:\\Users\\richa\\OneDrive\\Studium\\Digital Humanities\\Master\\2. Semester\\Visualisierung für Digital Humanities\\Praktikum\\Projekt\\Visualisierung_DH_interactive_map\\app\\sbz.json', 'r') as f:
        data = json.load(f)

    
    
    for i in range(0, len(data["features"])):
        print(data["features"][i]["properties"])
        print(data["features"][i]["properties"]["Name"])

    sys.exit()

def add_ndvi_to_geojson():
    df = pd.read_csv('data/Einkommen/Einkommen_und_Preise_Nettoeinkommen_OT.csv')
    name = df['Name']
    einkommen = df['Einkommen']
    with open('D:\\OneDrive\\Studium\\Digital Humanities\\Master\\2. Semester\\Visualisierung für Digital Humanities\\Praktikum\\Projekt 2\\Visualisierung_DH_interactive_map\\app\\ot2.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    for index, name in enumerate(name):
        print("Name Außen: " + name)

        for i in range(0, len(data["features"])):
            print("index innen: " + str(i))
            print(data["features"][i]["properties"]["Name"])
            if name == data["features"][i]["properties"]["Name"]:
                print("match!!!!!!!!!")
                data["features"][i]["properties"]["Einkommen"] = einkommen[index]
                break;

                

    for i in range(0, len(data["features"])):
        print(data["features"][i]["properties"])

    # with open('D:\\OneDrive\\Studium\\Digital Humanities\\Master\\2. Semester\\Visualisierung für Digital Humanities\\Praktikum\\Projekt\\Visualisierung_DH_interactive_map\\app\\sbz2.json', 'w', encoding='utf-8') as f:
    #     json.dump(data, f, ensure_ascii=False)

    with open('D:\\ot2.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

if __name__ == '__main__':
    #change_to_csv_with_commas()
    #read_json_to_df()
    add_ndvi_to_geojson()