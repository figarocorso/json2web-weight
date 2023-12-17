import datetime
import argparse
import json

def get_data():
    parser = argparse.ArgumentParser(description='Get weight and append JSON file.')
    parser.add_argument('--weight', '-w', type=float, required=True, help='Floating-point or integer number')
    args = parser.parse_args()

    try:
        weight = args.weight

        if weight.is_integer():
            weight = int(weight)

        current_date = datetime.datetime.now().strftime("%Y-%m-%d")

        new_data = {"weight": weight, "date": current_date}
        return new_data
    except ValueError:
        print("Error: Enter a valid number (can be integer or floating-point).")
        return None

def update_json(new_data, file_path):
    try:
        with open(file_path, 'r') as file:
            data_list = json.load(file)
    except FileNotFoundError:
        data_list = []

    data_list.append(new_data)

    with open(file_path, 'w') as file:
        json.dump(data_list, file, indent=2)

if __name__ == "__main__":
    result_data = get_data()

    if result_data:
        json_file_path = "data/weight.json"
        update_json(result_data, json_file_path)
        print(f"The entered data '{result_data}' has been added to the file {json_file_path}.")

