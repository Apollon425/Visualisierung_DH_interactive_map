import pandas as pd
from pathlib import Path
import glob
import sys

PATH = "data/Einkommen/"
print(PATH)

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



if __name__ == '__main__':
    change_to_csv_with_commas()