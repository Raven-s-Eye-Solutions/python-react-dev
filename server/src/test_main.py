import unittest
from main import app
app.testing = True

class TestApi(unittest.TestCase):
    def test_main(self):
        with app.test_client() as client:
            result = client.get(
                '/'
            )
            self.assertEqual(
                result.data,
                b'Sanity check!'
            )

if __name__ == '__main__':
   unittest.main()
