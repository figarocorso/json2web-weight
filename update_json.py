import argparse
import datetime
import json


def get_args():
    parser = argparse.ArgumentParser(description="Get weight and append JSON file.")
    parser.add_argument(
        "--weight",
        "-w",
        type=float,
        required=True,
        help="Floating-point or integer number",
    )
    parser.add_argument(
        "--file",
        "-f",
        required=False,
        default="data/weight.json",
        help="JSON file to append the information",
    )
    return parser.parse_args()


def get_data(weight):
    if weight.is_integer():
        weight = int(weight)

    current_date = datetime.datetime.now().strftime("%Y-%m-%d")

    new_data = {"weight": weight, "date": current_date}

    return new_data


def update_json(new_data, file_path):
    try:
        with open(file_path, "r") as file:
            data_list = json.load(file)
    except FileNotFoundError:
        data_list = []

    data_list.append(new_data)

    with open(file_path, "w") as file:
        json.dump(data_list, file, indent=2)


if __name__ == "__main__":
    args = get_args()
    result_data = get_data(args.weight)

    if result_data:
        update_json(result_data, args.file)
        print(
            f"The entered data '{result_data}' has been added to the file {args.file}."
        )
